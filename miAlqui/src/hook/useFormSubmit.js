// import { useEffect, useState } from "react";

// export const useFormSubmit = (step1Data, step2Data, step3Data) => {
//   const [stepValues, setValues] = useState(false);

//   useEffect(() => {
//     const submitForm = async () => {
//       try {
//         setValues(true);

//         //logica para enviar  los datos a la base de datos
//         const response = await fetch("api/Alojamiento", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             step1Data,
//             step2Data,
//             step3Data,
//           }),
//         });

//         if (response.ok) {
//           console.log("Datos enviado con exito");
//         } else {
//           console.error("Error al enviar los datos a la base de datos");
//         }
//       } catch (error) {
//         console.error("Error en la solicitud", error);
//       } finally {
//         setValues(false);
//       }
//     };
//     if (stepValues) {
//       submitForm();
//     }
//   }, [setValues, step1Data, step2Data, step3Data]);

//   return { submitForm, stepValues };
// };
