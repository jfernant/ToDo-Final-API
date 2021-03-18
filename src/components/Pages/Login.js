import Login from '../Login/Login';
import Content from '../Content/Content';
import LoginTitle from '../Login/LoginTitle';
import Form from '../Forms/Form';

function LoginPage(){
    return(
        <section>
            <Content>
                <Login>
                    <LoginTitle ti="Sign in to your account" pa="Or " re="start your free trial"></LoginTitle>
                    <Form></Form>
                </Login>
            </Content>        
        </section>
        
    )
}

export default LoginPage;