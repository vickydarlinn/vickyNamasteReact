import DeveloperCard from "./DeveloperCard";
import userData from "../teamMatesData";

function Body() {
  return (
    <section>
      <div className="developers">
        {userData.map((developer) => (
          <DeveloperCard
            key={developer.id}
            name={developer.developerName}
            image={developer.developerImage}
            location={developer.location}
            portfolio={developer.portfolio}
            discord={developer.discordUserId}
            linkedin={developer.linkedinProfile}
            company={developer.currentCompany}
            experience={developer.Experience}
          />
        ))}
      </div>
    </section>
  );
}
export default Body;

// <DeveloperCard
// name={developer.developerName}
// image={developer.developerImage}
// location={developer.location}
// portfolio={developer.portfolio}
// discord={developer.discordUserId}
// linkedin={developer.linkedinProfile}
// company={developer.currentCompany}
// experience={developer.Experience}
// />
