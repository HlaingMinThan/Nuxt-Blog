function useAuth() {
    let setUser = (name) => {
        localStorage.setItem('user',JSON.stringify({name}))
    }

    let getUser = () => {
        return JSON.parse(localStorage.getItem('user'));
    }
    let removeUser = () => {
        return localStorage.removeItem('user');
    }

    let isLoggedIn = computed(() => {
        return !!getUser();
    });
    return {setUser,getUser,isLoggedIn,removeUser}
}

export  {useAuth};