//dashboard code
constructor() {
  super();
  this.state= {
    joinGroups: [{joinGroupName:"", joinGroupPassword:""}],
    joinGroup: {
      joinGroupName: "",
      joinGroupPassword: ""
    },
    editGroups: [{editGroupName:"", editGroupPassword:"", editGroupDescription:""}],
    editGroup: {
      editGroupName: "",
      editGroupPassword: "",
      editGroupDescription:"",
      editSelectGroup:"",
    },
    user: userService.getUser(),
    groups:[],
    currentTasks: []
  }
}

handleJoinGroupInputChange = e => {
  const joinGroup = {...this.state.joinGroup, [e.target.name]: e.target.value}
  this.setState({joinGroup});
}

addJoinGroup = (e) => {
  e.preventDefault();
  this.setState(state => ({
    joinGroups: [...state.joinGroups, state.joinGroup],
    joinGroup: {
      joinGroupName: "",
      joinGroupPassword: ""
    }
  }))
}

handleEditGroupInputChange = e => {
  const editGroup = {...this.state.editGroup, [e.target.name]: e.target.value}
  this.setState({editGroup});
}

addEditGroup = (e) => {
  e.preventDefault();
  this.setState(state => ({
    editGroups: [...state.editGroups, state.editGroup],
    editGroup: {
      editGroupName: "",
      editGroupPassword: "",
      editGroupDescription:"",
      editSelectGroup:"",
    }
  }))
}

//group page code

constructor() {
  super();
  this.state= {
    joinGroups: [{joinGroupName:"", joinGroupPassword:""}],
    joinGroup: {
      joinGroupName: "",
      joinGroupPassword: ""
    },
    editGroups: [{editGroupName:"", editGroupPassword:"", editGroupDescription:""}],
    editGroup: {
      editGroupName: "",
      editGroupPassword: "",
      editGroupDescription:"",
      editSelectGroup:"",
    },
    leaveGroups: [{leaveGroupPassword:""}],
    leaveGroup: {
      leaveGroupPassword: ""
    },
  }
}


handleJoinGroupInputChange = e => {
  const joinGroup = {...this.state.joinGroup, [e.target.name]: e.target.value}
  this.setState({joinGroup});
}

addJoinGroup = (e) => {
  e.preventDefault();
  this.setState(state => ({
    joinGroups: [...state.joinGroups, state.joinGroup],
    joinGroup: {
      joinGroupName: "",
      joinGroupPassword: ""
    }
  }))
}

handleEditGroupInputChange = e => {
  const editGroup = {...this.state.editGroup, [e.target.name]: e.target.value}
  this.setState({editGroup});
}

addEditGroup = (e) => {
  e.preventDefault();
  this.setState(state => ({
    editGroups: [...state.editGroups, state.editGroup],
    editGroup: {
      editGroupName: "",
      editGroupPassword: "",
      editGroupDescription:"",
      editSelectGroup:"",
    }
  }))
}

handleLeaveGroupInputChange = e => {
  const leaveGroup = {...this.state.leaveGroup, [e.target.name]: e.target.value}
  this.setState({leaveGroup});
  console.log(this.state.leaveGroups)
}

addLeaveGroup = (e) => {
  e.preventDefault();
  this.setState(state => ({
    leaveGroups: [...state.leaveGroups, state.leaveGroup],
    leaveGroup: {
      leaveGroupPassword: "",
    }
  }))
}

componentDidMount() {
  // once component mounts we need to take the user data and use it to call
  // a userService function to make a request for the user data
  // once that data is returned we add it to component state and then
  // render it
  console.log("group page props", this.props)
  //let groupInfo = await groupService.getInfo(req.params.id)
 
}
