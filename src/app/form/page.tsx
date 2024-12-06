'use client'

import { useEffect, useState, FormEvent, useRef } from "react"

import { Api } from "@/services/api";

export default function Form() {

    const nameRef = useRef<HTMLInputElement | null>(null);
    const valueRef = useRef<HTMLInputElement | null>(null);
    const amountRef = useRef<HTMLInputElement | null>(null);
    const validityRef = useRef<HTMLInputElement | null>(null);
    const importanceRef = useRef<HTMLInputElement | null>(null);

    async function HandleSubmit(e: FormEvent) {
        e.preventDefault();

        if(!nameRef.current?.value || !valueRef.current?.value || !amountRef.current?.value) return;
    
    }

    return (
        <main className="mx-auto text-center">
            <form action="" className="mt-8 mb-10" onSubmit={HandleSubmit}>
                <p>
                    <label htmlFor="name" className="font-semibold text-zinc-400">Name</label> <br />
                    <input type="text" name="name" id="name" className="mb-5 p-3 rounded bg-zinc-800" placeholder="expense name"/>
                </p>
                <p>
                    <label htmlFor="value" className="font-semibold text-zinc-400">Value</label> <br />
                    <input type="text" name="value" id="value" className="mb-5 p-3 rounded bg-zinc-800" placeholder="type a value"/>
                </p>
                <p>
                    <label htmlFor="amount" className="font-semibold text-zinc-400">Amount</label> <br />
                    <input type="number" name="amount" id="amount" className="mb-5 p-3 rounded bg-zinc-800" placeholder="expense amount"/>
                </p>
                <p>
                    <label htmlFor="validity" className="font-semibold text-zinc-400">Validity</label> <br />
                    <input type="text" name="validity" id="validity" className="mb-5 p-3 rounded bg-zinc-800" placeholder="xx/xx/xxxx"/>
                </p>
                <p>
                    <label htmlFor="importance" className="font-semibold text-zinc-400">Importance</label> <br />
                    <input type="text" name="importance" id="importance" className="mb-5 p-3 rounded bg-zinc-800" placeholder="type expense importance"/>
                </p>

                <input type="submit" value="Register" className="bg-blue-600 py-2 px-4 hover:bg-blue-500 hover:duration-200 hover:scale-105 rounded cursor-pointer mt-3"/>
            </form>

            <a href="/" className="mt-11 py-3 px-7 bg-zinc-800 hover:bg-zinc-700 hover:duration-200 hover:scale-105 rounded">Back</a>
        </main>
    )
};