import { reactive } from 'vue'
import router from '../router/index'

const userStore = reactive({
    isAuth: false,
    // authenticateCreate(name, email, pass, confiremPass){
    //     console.log(`name: ${name} > email: ${email} > pass: ${pass} > confiremPass: ${confiremPass}`);
    // },
    authenticate(name, pass){
        const getData = localStorage.getItem('signup')
        const dataCollect = JSON.parse(getData)

        if ( (name == (null || undefined || '')) || (pass == (null || undefined || '')) ) {
            alert('Are You Registar My Website?')
        } 
        else if(dataCollect == null || undefined || ''){
            alert('Plese Sign Up My website And input Box Provide Your Name And Pass')
        } 
        else if((dataCollect.name == (null || undefined || '')) || (dataCollect.pass == (null || undefined || ''))){
            alert('Plese Registation Provide Your Correct name and password')
        } 
        else {
            if ((dataCollect.name == name) && (dataCollect.pass == pass)) {
                router.push('/dashboard')
                return userStore.isAuth = true
            } else {
                alert('Your Provide info is worng')
                return userStore.isAuth = false
            }
        }
    },
    notauthenticate(){
        userStore.isAuth = false
    }
})
export {userStore}

