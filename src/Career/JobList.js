import React, {Component} from 'react';
import './JobList.css';
import Job from './Job';

class JobList extends Component {
    super(props) {}
    static defaultProps = {
            jobs: [
                {
                    key: "1",
                    title: "Web Development",
                    location: "New York, NY",
                    description: "TVSensei takes popular video content and facilitates the creation of language lessons to practice the spoken language. Web development interns will create the backbone that allows us to integrate streamable video content and our own lesson creation tools.",
                    duties: [
                        "Create and test designs, features, and learning tools using HTML, CSS, and Javascript",
                        "Create full-stack web applications using NodeJS,  MongoDB and Express"
                    ],
                    ideal: "TVSensei is looking to hire curious, creative individuals with a passion for language learning and teaching. Ideal candidates have 1-2 years of group programming experience and knowledge of Java or C. Additionally, candidates can work a minimum of 10 hours per week. Bonus points if you are fluent in a language other than English.",
                    benefit: "Gain valuable experience working closely with team members in various roles at a startup. Take advantage of TVSensei’s membership in the StartEd Incubator and Amazon’s AWS Loft. Build your network in the game design, education, and education-technology fields by coming together with other startup teams and local educators.",
                    apply: "Send a resume, cover letter, and sample of previous work to henry@tvsensei.com. In the cover letter, describe relevant experience and how you work. Additionally, describe what you are passionate about, what you hope to gain from working on team, the days and hours you can work on the project, and how you feel you can contribute.",
                    footer: "Successful candidates will be invited to interview. Responses will go out no later than 1 week following submission of each application."
                },
                {
                    key: "2",
                    title: "ELL Lesson Development",
                    location: "New York, NY",
                    description: "TVSensei takes popular video content and creates language lessons to practice the spoken language. ELL Lesson Development interns will onboard and work closely with experienced teachers and current ELL students to assess teacher/student needs and design lessons to accompany popular English language videos.",
                    duties: [
                        "Onboard educators and students as potential clients",
                        "Work alongside potential clients to design lessons and TVSensei features using a variety of English language media",
                        "Collaborate with local English language teachers to bring TVSensei to classrooms"
                    ],
                    ideal: "TVSensei is looking to hire curious, creative individuals looking to build a career in English language education. Ideal candidates can work a minimum of 10 hours per week and are fluent in English and one other language. ",
                    benefit: "Gain valuable experience designing the future of language learning! Work closely with team members across departments at a startup. Take advantage of TVSensei’s membership in the StartEd Incubator and Amazon’s AWS Loft. Build your network in the education and education-technology fields by coming together with other startup teams and local educators.",
                    apply: "Send a resume and cover letter to henry@tvsensei.com. In the cover letter, identify a pain point in English language education. What would be your approach to identifying a solution (who would you talk to?, what questions would you ask?, etc)? Additionally, describe what you are passionate about, what you hope to gain from the internship, and the days and hours you can work on the project.",
                    footer: "Successful candidates will be invited to interview. Responses will go out no later than 1 week following submission of each application."
                },
                {
                    key: "3",
                    title: "Outreach Management",
                    location: "New York, NY",
                    description: "TVSensei takes popular video content and creates language lessons to practice the spoken language. ELL Lesson Development interns will onboard and work closely with experienced teachers and current ELL students to assess teacher/student needs and design lessons to accompany popular English language videos.",
                    duties: [
                        "Create lead sheets for potential content partners and customers",
                        "Engage with leads to build trust",
                        "Attend local events to promote the brand and add leads"
                    ],
                    ideal: "TVSensei is looking to hire curious, creative individuals looking to build a career in English language education. Ideal candidates can work a minimum of 10 hours per week and are fluent in English and one other language.",
                    benefit: "Gain valuable experience connecting with an array of people in the education, entertainment, and technology industries. Build valuable connections that may last beyond the internship. Work closely with team members in various roles at a startup and take advantage of TVSensei’s membership in the StartEd Incubator and Amazon’s AWS Loft.",
                    apply: "Send a resume and cover letter to henry@tvsensei.com. In the cover letter, describe what you hope to gain from working on team, the days and hours you can work on the project, and how you feel you can contribute.",
                    footer: "Successful candidates will be invited to interview. Responses will go out no later than 1 week following submission of each application."
                }
            ]
    }
    render() {
        return(
            <section className="job-list">
                <div className="job-container">
                    {this.props.jobs.map((job) => (
                        <div className="job-card" key={job.key}>
                            <Job 
                                id={job.key}
                                title={job.title} 
                                location={job.location}
                                description={job.description}  
                                duties={job.duties}
                                ideal={job.ideal}
                                benefit={job.benefit}
                                apply={job.apply}
                                footer={job.footer}
                            />
                        </div>
                    ))}
                </div>
                <div className="job-list-text text-center">
                    <h2>Interested?</h2>
                    <p>Find more job description <a href="https://docs.google.com/document/d/1Nh-1ynwkJq7XSE37Vn6wNAk1AV1PbhOD4bkIlsd7pJY/edit">here</a> <br />Or send your resume to <span className="email">henry@tvsensei.com</span></p>
                </div>
            </section>
        );
    }
}

export default JobList;