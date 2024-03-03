function status(request, response) {
  response.status(200).json({ text: "Ese é o meu primeiro response" });
}

export default status;
