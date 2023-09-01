function useAuth() {
    let setUser = (name) => {
        if(process.client) {
            localStorage.setItem('user',JSON.stringify({name}))
        }
    }

    let user = computed(() => {
        if(process.client) {
            return JSON.parse(localStorage.getItem('user'));
        }
    })
    
    let removeUser = () => {
        if(process.client) { 
            return localStorage.removeItem('user');
        }
    }

    let isLoggedIn = computed(() => {
        return !!user.value;
    });
    return {setUser,user,isLoggedIn,removeUser}
}

export  {useAuth};