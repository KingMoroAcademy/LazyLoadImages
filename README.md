# LazyLoadImages
Demo for Lazy Loading Images

# About the author
Name: Mohamed Fayez / Mohamed Shaker / Moro (Choose what is beter for you :).
Country: Egypt
Age: 36
Role: Web designer/developer (I've worked as freelancer only).
Seeking a full time position with a team or a company as a web designer/developer in USA/Canada/UK/Australia, which are my dream countries to relocate and live my life
Too much truth? I know, that's me ^_^

## Ignored files
I've used Git/Github service to publish my source code, and used .gitignore files to exclude file types: .map, .scss. 
So You will only see the production style .css files. If you need the source .scss/.map files please feel free to contact me at moromero9875@gmail.com

## Why the lazy loading images i important?
Lazy loading is a way to only download images that are in the viewport of the user. And it's important because it enhnce the performance by increasing the website loading speed specially over the slow internet connection. Imagine you have like a 100 image in one page for like a web store or something and all are high quality images!! The page isn't gonna load fast and the user is gonna close it and go to another website.
But to make it amazing while the user scrolling in-page he must see something , You will get it when you try to scroll fast or using a very slow internet connection during your scrolling, you will notice a white background space because the images haven't loaded yet. So, Lazy loading effect can't work alone, it need the blurry effect with it too.
In anothe way I can tell you, Lazy loading is only used to delay images view, and blurry effect show blurry placeholder image untill the image fully downloaded to the the machine browser.

## How lazy loading works
I've added the image attribute loading="lazy" to every image manually in the index.html

## How blurry effect works
I've used a conaining div for every image with class name "blur-load" which I used to show a very very small copy of the same child image of this container, and I've added the placeholder image using the background-image: url(); as inline style in the index file , and then I've added style for it in the style.css that making this incridebly small 20px only image take the full size with the style background-size: cover; that prevented it from being repeated in the full original image size. and to make sure the img itself too has the same result I've used img:{object-fit: cover;}.
Also we need the original image to be centered with style property img {object-position: center;} and the same for the parent placeholder image .blur-load {background-position: center;}

## Get minimized images version
To use as placeholder images I've generated a small version of the original images using the tool iloveimg
It's an online tool to resizing multible images at once and downloading them as zipfile which you're gonna see in the images folder

Now we have the div that has a background placeholder images which is very small and it loads until the child img starts to appear, and here is the new problem the img on the very low internet connection appear itself from top to bottom too, we need it to stay hidden or the background placeholder image stay shown until the img is fully loaded on the machine browser.

So, I've added some js and stle codes to do the job.

Also I've added a cool pulsing effect to the images that's not fully loaded yet using ::before and animation with keyframes to make it pulsing and made it removed with before: none when the image is fully loaded (Which mean when the element is got the .loaded style). 