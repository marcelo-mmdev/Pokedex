// import Conteiner from '../components/template/conteiner'

import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import Conteiner from "../components/template/conteiner";
import { useForm } from 'react-hook-form';
import { Gallery } from "react-grid-gallery";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "../photos";



export default function Test(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [index, setIndex] = useState(-1);

    const images = [
        {
           src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
           width: 320,
           height: 174,
           isSelected: true,
           caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
           src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
           width: 320,
           height: 212,
           
           alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
            width: 220,
            height: 112,
           
            alt: "Boats (Jeshu John - designerspics.com)",
         },
      
        {
           src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
           width: 320,
           height: 212,
        },

        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            width: 520,
            height: 274,
            isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)",
         },
         {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            width: 1020,
            height: 812,
            
            alt: "Boats (Jeshu John - designerspics.com)",
         },
         {
             src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
             width: 320,
             height: 112,
            
             alt: "Boats (Jeshu John - designerspics.com)",
          },
       
         {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 20,
            height: 22,
         },
     ];

    //  const photos = [
    //     {
    //         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    //         width: 200,
    //         height: 300
    //     },
    //     {
    //         src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    //         width: 1600,
    //         height: 900
    //     },
    //     {
    //         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    //         width: 400,
    //         height: 200
    //     },
    //     {
    //         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    //         width: 200,
    //         height: 300
    //     },
    //     {
    //         src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    //         width: 1600,
    //         height: 900
    //     },
    //     {
    //         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    //         width: 400,
    //         height: 200
    //     },
    //     {
    //         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    //         width: 200,
    //         height: 300
    //     },
    //     {
    //         src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    //         width: 1600,
    //         height: 900
    //     },
    //     {
    //         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    //         width: 400,
    //         height: 200
    //     },
    //     {
    //         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    //         width: 200,
    //         height: 300
    //     },
    //     {
    //         src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    //         width: 1600,
    //         height: 900
    //     },
    //     {
    //         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    //         width: 400,
    //         height: 200
    //     },
    //     {
    //         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    //         width: 200,
    //         height: 300
    //     },
    //     {
    //         src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    //         width: 1600,
    //         height: 900
    //     },
    //     {
    //         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    //         width: 400,
    //         height: 200
    //     },
   
    // ];

    const slides = photos.map(({ src, width, height, images }) => ({
        src,
        width,
        height,
        srcSet: images.map((image) => ({
          src: image.src,
          width: image.width,
          height: image.height
        }))
      }));

    return (

        
        <>
            <Button onClick={onOpen}>Open Modal</Button>

             <Modal isOpen={isOpen} onClose={onClose}>
                 <ModalOverlay />
                 <ModalContent>
                 <ModalHeader>Modal Title</ModalHeader>
                 <ModalCloseButton />
                <ModalBody>
                    <Box mt='50px'>
                         <PhotoAlbum layout="masonry" photos={photos}
                            onClick={(event, photo, index) => setIndex(index)}
                        />

                        <Lightbox
                            slides={slides}
                            open={index >= 0}
                            index={index}
                            close={() => setIndex(-1)}
                            // enable optional lightbox plugins
                            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                        />
                    </Box>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>


        </>
        
    )
    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from "react";

// import PhotoAlbum from "react-photo-album";

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// // import optional lightbox plugins
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

// import photos from "./photos";

// const slides = photos.map(({ src, width, height, images }) => ({
//   src,
//   width,
//   height,
//   srcSet: images.map((image) => ({
//     src: image.src,
//     width: image.width,
//     height: image.height
//   }))
// }));

// const App = () => {
//   const [index, setIndex] = useState(-1);

//   return (
//     <>
//       <PhotoAlbum
//         photos={photos}
//         layout="masonry"
//         targetRowHeight={150}
//         onClick={(event, photo, index) => setIndex(index)}
//       />

//       <Lightbox
//         slides={slides}
//         open={index >= 0}
//         index={index}
//         close={() => setIndex(-1)}
//         // enable optional lightbox plugins
//         plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
//       />
//     </>
//   );
// };

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import Conteiner from '../components/template/conteiner'

// import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
// import Conteiner from "../components/template/conteiner";
// import { useForm } from 'react-hook-form';


// export default function Test(){

//     // const {register, handleSubmit} = useForm();

//     // const onSubmit = (e) => {
//     //   console.log(e);
//     // }

//     return (
//         <>
//             {/* <form onSubmit={handleSubmit(onSubmit)}>
//                 <label>
//                     Nome:
//                     <input type="text" {...register("firstName")}/>
//                 </label>
//                 <label>
//                     Sobrenome:
//                     <input type="text" {...register("lastName" )}/>
//                 </label>
//                 <button type="submit">Enviar</button>
//             </form>
//             <label>
//                     Nome:
//                     <input type="text"                    
                        
//                         onChange={(e) => value(e.target.value)}
//                     />
//                 </label>
//                 <label>
//                     Sobrenome:
//                     <input type="text" />
//                 </label>
//                 <button type="submit">Enviar</button> */}

//             {/* <Conteiner />  */}
//         </>
//     )
// }