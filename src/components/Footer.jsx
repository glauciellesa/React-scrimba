export default () => {
  const date = new Date().getFullYear();

  const lName = "Sá";
  return (
    <p>
      © {date} {lName} development. All rights reserved.
    </p>
  );
};
