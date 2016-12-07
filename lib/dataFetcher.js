import axios  from 'axios'

function allProjects() {
  return ([
    {name: "learn_react", description: "learn it"},
    {name: "learn_css", description: "get better at it"},
    {name: "learn_elixir", description: "make a thing!"}
  ])
}

export { allProjects }
