
export const appointmentHandler = async (event) => {

  console.log("estoy desde la lambda que ejecutara operaciones desde peru");
  console.log(event);

  return {
    statusCode: 200,
    event
  };
};
