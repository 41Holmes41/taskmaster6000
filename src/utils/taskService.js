import tokenService from './tokenService';

export default {
  create,
  add,
  edit
};

function edit(info) {
  return fetch('/api/tasks/edit', {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    }),
    body: JSON.stringify(info)
  })
  .then(res => {
  
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('error in tasks service: create');
  })
}

function add(info) {
  return fetch('/api/tasks/add', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    }),
    body: JSON.stringify(info)
  })
  .then(res => {
  
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('error in tasks service: create');
  })
}

function create(info) {
  return fetch('/api/tasks/create', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    }),
    body: JSON.stringify(info)
  })
  .then(res => {
  
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('error in tasks service: create');
  })
}