import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity'; // Correctly import the `Image` type
import { dataset, projectId } from '../env'; // Ensure these are correctly imported

// Create the image URL builder
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '', // Fallback to empty string if projectId is undefined
  dataset: dataset || '', // Fallback to empty string if dataset is undefined
});

// Function to generate image URLs
export const urlForImage = (source: Image) => {
  if (!source) return null; // Handle cases where the source is undefined
  return imageBuilder.image(source).auto('format').fit('max').url();
};