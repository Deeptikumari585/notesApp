import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    nameOfCompany: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer - Full Stack",
    tag: "Full time",
    tag2: "Mid level",
    pay: 42,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    nameOfCompany: "Amazon",
    datePosted: "4 days ago",
    post: "SDE I (Frontend)",
    tag: "Full time",
    tag2: "Junior level",
    pay: 25,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    nameOfCompany: "Meta",
    datePosted: "1 week ago",
    post: "Production Engineer",
    tag: "Full time",
    tag2: "Senior level",
    pay: 65,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    nameOfCompany: "Apple",
    datePosted: "3 days ago",
    post: "iOS Application Engineer",
    tag: "Full time",
    tag2: "Mid level",
    pay: 48,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    nameOfCompany: "Microsoft",
    datePosted: "5 days ago",
    post: "Cloud Solution Architect",
    tag: "Full time",
    tag2: "Senior level",
    pay: 58,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    nameOfCompany: "Netflix",
    datePosted: "2 weeks ago",
    post: "UI/UX Research Specialist",
    tag: "Part time",
    tag2: "Senior level",
    pay: 70,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    nameOfCompany: "Uber",
    datePosted: "6 days ago",
    post: "Backend Engineer - Distributed Systems",
    tag: "Full time",
    tag2: "Mid level",
    pay: 38,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    nameOfCompany: "Oracle",
    datePosted: "3 weeks ago",
    post: "Cloud Infrastructure Specialist",
    tag: "Part time",
    tag2: "Junior level",
    pay: 20,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    nameOfCompany: "Salesforce",
    datePosted: "1 day ago",
    post: "Quality Assurance Engineer",
    tag: "Part time",
    tag2: "Junior level",
    pay: 18,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    nameOfCompany: "Adobe",
    datePosted: "1 month ago",
    post: "Data Engineer - Analytics",
    tag: "Full time",
    tag2: "Mid level",
    pay: 35,
    location: "Mumbai, India"
  }
]; 


      return (
        <div className="parent">
        {jobOpenings.map(function(elem,idx){
          
          

          //React can identify each element uniquely so key
          return <div key ={idx}>
           <Card company = {elem.companyName} datePosted ={elem.datePosted} 
          post ={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
          </div>
        })}
        </div>
      )
    }     


export default App
