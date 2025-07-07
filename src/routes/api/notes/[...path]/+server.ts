import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

const notesDir = path.resolve('notes');

export async function GET({ params }) {
  const notePath = path.join(notesDir, params.path);
  try {
    const content = fs.readFileSync(notePath, 'utf-8');
    return json({ content });
  } catch (error) {
    return new Response('Not Found', { status: 404 });
  }
}

export async function DELETE({ params }) {
  const notePath = path.join(notesDir, params.path);
  try {
    fs.unlinkSync(notePath);
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response('Not Found', { status: 404 });
  }
}
