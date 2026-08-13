import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobs = [
  {
    brandLogo: "https://imgs.search.brave.com/hvaLXRVXtsmGg7ihXAu8RftIWvQayugqRQpBXWgUoUo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2V5d2VvLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/OS9EaXNlbm8tc2lu/LXRpdHVsby05LnBu/Zw",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$46/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hour",
    location: "Pune, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/Uz5LozAjV3pM04U2FkxA7N9M28IXz25ZqgWJ0GyT3iw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzQ1NjcucG5n",
    companyName: "IBM",
    datePosted: "3 weeks ago",
    post: "Data Scientist",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$38/hour",
    location: "Noida, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$44/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDub9hpTnsRvDxcNfqVvzaqT8cgv4kbFDG7o95AnyO8g&s=10",
    companyName: "Salesforce",
    datePosted: "10 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$41/hour",
    location: "Bengaluru, India",
  },
];
console.log(jobs)
  return (
    <div className='parent'>
    
     {jobs.map(function(elem ,idx){
     return <div key={idx}>
      <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} logo={elem.brandLogo} date={elem.datePosted} location={elem.location} />
      </div>
})}
    
    </div>
  )
}

export default App
