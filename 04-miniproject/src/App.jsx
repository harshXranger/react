import Card from './components/card.jsx'
const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://placehold.co/50x50/333/fff?text=AB",
      nameOfCompany: "AlphaBridge Solutions",
      datePosted: "2 hours ago",
      post: "Frontend Developer (React)",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$45/hr",
      location: "New York, USA"
    },
    {
      brandLogo: "https://placehold.co/50x50/007bff/fff?text=DB",
      nameOfCompany: "DataStream Analytics",
      datePosted: "5 days ago",
      post: "Junior Data Analyst",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$20/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://placehold.co/50x50/28a745/fff?text=GC",
      nameOfCompany: "GreenCode Technologies",
      datePosted: "3 weeks ago",
      post: "Senior Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "London, UK"
    },
    {
      brandLogo: "https://placehold.co/50x50/ffc107/333?text=FC",
      nameOfCompany: "FusionCorp Labs",
      datePosted: "1 month ago",
      post: "UX/UI Designer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://placehold.co/50x50/dc3545/fff?text=IR",
      nameOfCompany: "Ironclad Robotics",
      datePosted: "10 hours ago",
      post: "Software Tester",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$30/hr",
      location: "Tokyo, Japan"
    },
    {
      brandLogo: "https://placehold.co/50x50/6f42c1/fff?text=QT",
      nameOfCompany: "Quantum Telecom",
      datePosted: "8 weeks ago",
      post: "Network Administrator",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Dubai, UAE"
    },
    {
      brandLogo: "https://placehold.co/50x50/fd7e14/fff?text=EV",
      nameOfCompany: "EvoVolt Energy",
      datePosted: "1 day ago",
      post: "Marketing Specialist",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$35/hr",
      location: "Paris, France"
    },
    {
      brandLogo: "https://placehold.co/50x50/20c997/fff?text=SK",
      nameOfCompany: "Skyline Kinetics",
      datePosted: "4 months ago",
      post: "Backend Engineer (Node.js)",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://placehold.co/50x50/6610f2/fff?text=NG",
      nameOfCompany: "NovaGen Pharmaceuticals",
      datePosted: "2 days ago",
      post: "Research Assistant",
      tag1: "Internship",
      tag2: "Junior Level",
      pay: "$15/hr",
      location: "Boston, USA"
    },
    {
      brandLogo: "https://placehold.co/50x50/e83e8c/fff?text=WS",
      nameOfCompany: "WebSense Digital",
      datePosted: "12 weeks ago",
      post: "Content Writer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$38/hr",
      location: "Bangalore, India"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card company={elem.nameOfCompany} datePosted={elem.datePosted} brandLogo={elem.brandLogo} post={elem.post} 
        tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
      })}
    </div>
  )
}

export default App
