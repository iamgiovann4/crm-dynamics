// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };



// function AbrirModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleClose = () => setOpen(false);
//   const handleOpen = () => setOpen(true);
//   return (
//     <div>
//          <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={FecharModal}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//           <Button onClick={FecharModal}>Open modal</Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

// export default AbrirModal
