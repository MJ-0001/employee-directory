async function getData() {
  try {
    const response = await fetch('https://randomuser.me/api/?results=100');
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    }
    
    throw new Error("Request failed");
  } catch(error) {
    console.log(error);
  }
}

export default getData;