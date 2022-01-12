import Note from "./Components/Note.component";

export const routes = [
  {
    path: "/note",
    element: (
      <Note
        id="id"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ea
          velit sed maxime earum quisquam, excepturi ullam at alias, nisi
          doloremque rerum quod quaerat consequuntur dicta saepe eveniet magni
          voluptatum?"
        title="Le titre"
      />
    ),
  },
];
