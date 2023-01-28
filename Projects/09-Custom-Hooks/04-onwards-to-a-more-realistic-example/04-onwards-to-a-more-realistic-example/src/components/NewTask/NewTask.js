import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, data) => {
    // const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: data.name, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://react-http-d5b4c-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createTask.bind(null, taskText)
    );
  };

  // const enterTaskHandler = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "https://react-http-d5b4c-default-rtdb.firebaseio.com/tasks.json",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({ text: taskText }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Request failed!");
  //     }

  //     const data = await response.json();

  //     const generatedId = data.name; // firebase-specific => "name" contains generated id
  //     const createdTask = { id: generatedId, text: taskText };

  //     props.onAddTask(createdTask);
  //   } catch (err) {
  //     setError(err.message || "Something went wrong!");
  //   }
  //   setIsLoading(false);
  // };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
