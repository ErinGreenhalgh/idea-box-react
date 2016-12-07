import axios  from 'axios'

export default const dataFetcher = {
  all: allProjects,
}

function allProjects() {
  var data = null
  axios.get("https://project-manager-18532.firebaseio.com/projects.json?")
  .then( (response) => {
    console.log("response:", response.data)
    data = response.data
  })
  .catch( (error) => {
    console.log(error);
    return error;
  });
  return data;
}
