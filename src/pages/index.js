import Homepage from "@/components/Homepage";

export default function Home(props) {
  return (
    <div>
      {props.data ? (
        <Homepage {...props} />
      ) : (
        <div>
          <h1
            className="noapi"
            data-text="API NOT WORKING APP UNDER CONSTRUCTION"
          >
            API NOT WORKING APP UNDER CONSTRUCTION
          </h1>
        </div>
      )}
    </div>
  );
}
