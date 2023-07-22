import Image from "next/image";
import Layout from "@/app/layout";

export default async function Home() {
  
  const response = await fetch('http://localhost:3001/api/users');
 const data = await response.json();

  return (
    <>
    <div className='  flex flex-col justify-center items-center  pr-96 pl-96 w-screen h-[35rem]  bg-[url("https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")]'>
        <h1 className='text-center font-extrabold text-8xl backdrop-blur-sm text-white'>CodeSlayer</h1>
        <p className='mt-16 font-mono text-2xl backdrop-blur-sm  text-white '>The process of slaying bugs  from the code</p>
      </div>
      <div className='mt-10 ml-10' >
        <h1 className='animate-pulse font-mono text-3xl mb-5 font-bold'>Top Blogs</h1>
        {data.map((item) => {
  return (
    <div key={item.id}>
      <p>{item.id}</p>
      <p>{item.name}</p>
      <p>{item.email}</p>
    </div>
  );
})}
      </div>
    </>
  )
}
