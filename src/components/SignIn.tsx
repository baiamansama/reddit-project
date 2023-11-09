import { Icons } from './Icons'

const SignIn = () => {
    return <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
        <Icons.logo className='mx-auto h-6 w-6' />
        <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
        <p className='text-sm max-w-xs mx-auto'>
            By continuing, you are setting up a Reddit account and agree to our
            User Agreement and Privacy POlicy
        </p>
        {/* sign in form */}
        
    </div>
}

export default SignIn