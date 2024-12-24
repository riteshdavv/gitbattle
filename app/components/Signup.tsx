"use client"

import axios from "axios";
import { ChangeEventHandler, useState } from "react";

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="h-screen flex justify-evenly items-center">
            <div className="flex w-4/5 h-4/6 justify-between border bg-gray-100 rounded-md p-6">
                <div className="flex flex-col p-6 justify-between">
                    <div>
                        <h3 className="text-5xl font-bold">Create a new account</h3>
                        <br />
                        <p className="text-xl">by signing up to GitBattle.</p>
                    </div>
                    <div>
                        <p className="py-4 text-lg text-gray-500">"Your open-source journey awaits for you."</p>
                    </div>
                </div>
                <div className="flex flex-col w-1/3 justify-evenly py-4 px-6 text-black rounded-md border bg-white">
                    <h3 className="text-3xl font-bold text-center mb-2">Sign Up</h3>
                    <LabelledInput 
                    onChange={(e)=> {
                        setEmail(e.target.value);
                    }}
                    label="Email" 
                    placeholder="yourname@gmail.com"/>
                    <LabelledInput 
                    onChange={(e)=> {
                        setPassword(e.target.value);
                    }}
                    label="Password" 
                    type={"password"}
                    placeholder="••••••••"/>
                    <button 
                    onClick={async ()=> {
                        const response = axios.post("http://localhost:3000/api/user", {
                        email,
                        password})
                    }}
                    type="button"
                    className="bg-black text-lg px-4 text-white py-2 rounded-md hover:bg-gray-800">   
                        Sign up
                    </button>
                </div>
            </div>
            
        </div>
    )
}

function LabelledInput({label, placeholder, type, onChange} : LabelledInputType){
    return(
        <div className="">
            <label className="font-medium text-lg">{label}</label>
            <br />
            <input 
            onChange={onChange}
            type={type || "text"}
            id="first_name"
            className="border w-full p-2 my-2 rounded"
            placeholder={placeholder}
            required 
            />
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  }