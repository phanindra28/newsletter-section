export const handleFormSubmit = (event) => {
  event.preventDefault();

  const form = event.target;

  const email = form.elements["email"].value;

  if (email) {
    fetch(
      "https://www.greatfrontend.com/api/projects/challenges/newsletter\n",
      {
        method: "POST",
        body: JSON.stringify({ email }),
      },
    );
  }
};
