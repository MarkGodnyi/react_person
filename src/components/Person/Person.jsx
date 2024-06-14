import React from 'react';

export const Person = ({ person }) => {
  let personPartnerPhrase = 'I am not married';
  const personPartner = person.sex === 'm' ? 'wife' : 'husband';

  if (person.isMarried) {
    personPartnerPhrase = `${person.partnerName} is my ${personPartner}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age > 0 && <p className="Person__age">I am {person.age}</p>}

      <p className="Person__partner">{personPartnerPhrase}</p>
    </section>
  );
};
