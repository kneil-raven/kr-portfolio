const tech = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'];

export default function TechStack() {
    return (
        <section>
            <h2>Tech Stack</h2>
            <div>
                {tech.map( (item, i) => (
                    <span key={i}>{item}</span>
                ))}
            </div>
        </section>
    )
}