import React from "react";

export const Parcours = () => {
  const parcours = [
    {
      id: 1,
      title: "Seconde générale et technologique",
      checkpoint: "",
      description: "",
    },
    {
      id: 2,
      title: "Première et terminale STI2D",
      checkpoint: "",
      description:
        "Sciences et technologies de l'industrie et du développement durable, spécialité Systèmes d'information et numérique.",
    },
    {
      id: 3,
      title: "BUT Informatique",
      checkpoint: "",
      description:
        "Parcours : Réalisation d'applications. \nAlternance : Développeur back-end chez Fnac-Darty.",
    },
  ];

  return (
    <div className="timeline-container" id="parcours">
      <h2>Parcours scolaire</h2>
      <div className="timeline">
        {parcours.map((etape, index) => (
          <div key={etape.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-content">
              <h3>{etape.title}</h3>
              {etape.description && (
              <p>
                {etape.description.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            )}
            </div>
            <div className="timeline-icon">{etape.checkpoint}</div>
          </div>
        ))}
      </div>
    </div>
  );
};