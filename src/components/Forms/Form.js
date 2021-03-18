import Input from "./Input";
import Label from "./Label";
import Radio from "./Radio";
import Button from "./Button";

function Form(){
    return (
        <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true"></input>
            
            <div>
                <Label for="email-address" text="Email address"></Label>
                <Input id="email-address" name="email" type="email" autocomplete="email" placeholder="Email address" ></Input>
            </div>
            <div>
                <Label for="password" text="Password"></Label>
                <Input id="password" name="password" type="password" autocomplete="password" placeholder="Password" ></Input>
            </div>

            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <Radio id="remember_me" name="remember_me" type="checkbox" ></Radio>
                    <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                    Remember me
                    </label>                
                </div>

                <div class="text-sm">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                    </a>
                </div>
            </div>

            <div>
                <Button type="submit" text="Sign in"></Button>
            </div>    

        </form>
    );
}
export default Form;