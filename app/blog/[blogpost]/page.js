"use client"
function blogPost({params}) {
console.log(params);

let tit1=decodeURIComponent(params.blogpost.replace("%20",' '));
  return (
    <div>
     <h1 className="font-bold text-3xl m-6">{tit1}</h1>
     <p className="m-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis deleniti animi totam. Unde fuga enim impedit architecto obcaecati repellat, quisquam dolor? Culpa, neque? Expedita reiciendis doloremque vitae sequi consequatur pariatur amet tempore qui provident voluptatibus sint consectetur, doloribus accusamus quis sunt. Placeat corporis sunt fuga laudantium consequatur? Hic ea nam voluptatem necessitatibus quia recusandae dolores, architecto autem ducimus velit ex illum unde illo obcaecati alias voluptate officia veniam suscipit pariatur culpa, voluptas quasi dolore! Iusto ab explicabo totam tempore. Temporibus corrupti unde quidem voluptatem ratione, natus aliquam excepturi explicabo rem magni eveniet! Inventore esse aliquid eos ducimus, consequatur excepturi?</p>
    </div>
  )
}
export default blogPost;