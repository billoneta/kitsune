import { copyFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { glob } from 'glob';

export async function copyFiles(): Promise<boolean> {
 try {
  const files = await glob('src/**/**/*.hbs');
  for (const file of files) {
   const relativePath = path.relative('src', file);
   const destPath = path.join('dist', relativePath);
   const destDir = path.dirname(destPath);
   mkdirSync(destDir, {
    recursive: true,
   });
   copyFileSync(file, destPath);
   console.log(`Copied: ${file} > ${destPath}`);
  }
  return true;
 } catch (error) {
  throw error;
 }
}

copyFiles()
 .catch((error: Error) => {
  console.error(error);
  process.exitCode = 1;
 })
 .then((copy) => {
  if (copy) console.log('All files are copied');
 });
