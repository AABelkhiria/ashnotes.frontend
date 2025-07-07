import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

const notesDir = path.resolve('notes');

function getFileTree(dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const tree = dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      return {
        id: path.relative(notesDir, res),
        name: dirent.name,
        children: getFileTree(res)
      };
    } else {
      return {
        id: path.relative(notesDir, res),
        name: dirent.name
      };
    }
  });
  return tree;
}

export async function GET() {
  const tree = getFileTree(notesDir);
  return json(tree);
}

export async function POST({ request }) {
  const { path: notePath, content } = await request.json();
  const fullPath = path.join(notesDir, notePath);
  const dir = path.dirname(fullPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(fullPath, content);
  return json({ success: true });
}
