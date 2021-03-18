function LoginTitle({ti, pa, re}){
    return (
        <div>            
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {ti}
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
            {pa}
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            {re}
            </a>
            </p>
        </div>
    );
}
export default LoginTitle;