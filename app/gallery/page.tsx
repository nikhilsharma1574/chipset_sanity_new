import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];

const page = () => {
  return (
      <div className='w-full p-1 md:p-6 flex flex-col'>
            <div className='flex flex-col'>
              <div className='page2 p-4 flex flex-col justify-center items-center'>
                        <p className='md:text-4xl font-extrabold text-xl md:font-semibold'>GALLERY</p>
              </div>
            </div>
            <div className='mobile md:hidden'>
              <ImageList className='w-full h-full' variant="quilted" cols={2} rowHeight={101} >
                {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                  <Image height={100} width={100} {...srcset(item.img, 500, item.rows, item.cols)} alt={item.title} className='rounded-xl'  loading="lazy" />
                </ImageListItem>
                ))}
              </ImageList>
            </div>
              <div className='tablet xs:hidden'>
                <ImageList className='w-full h-full' variant="quilted" cols={3} rowHeight={251} >
                  {itemData.map((item) => (
                  <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <Image height={100} width={100} {...srcset(item.img, 500, item.rows, item.cols)} alt={item.title} className='rounded-xl' loading="lazy" />
                  </ImageListItem>
                  ))}
                </ImageList>
              </div>
              <div className='Laptop xs:hidden sm:hidden'>
                <ImageList className='w-full h-full' variant="quilted" cols={5} rowHeight={501} >
                  {itemData.map((item) => (
                  <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <Image height={100} width={100} {...srcset(item.img, 500, item.rows, item.cols)} alt={item.title} className='rounded-xl' loading="lazy" />
                  </ImageListItem>
                  ))}
                </ImageList>
              </div>
              
      </div>
        

  )
}

export default page
