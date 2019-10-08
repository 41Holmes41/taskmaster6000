import tokenService from './tokenService';

export default {
  create,
  getInfo
};

function create(info) {
  return fetch('/api/groups/create', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    }),
    body: JSON.stringify(info)
  })
  .then(res => {
    console.log(res)
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('error in groups service: create');
  })
}

function getInfo(id) {
  return fetch('/api/groups/'+ id, {
    method: 'GET',
    headers: new Headers({'Content-Type': 'application/json'})
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
}
