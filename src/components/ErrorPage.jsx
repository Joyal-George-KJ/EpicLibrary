export default function ErrorPage({ message = "Something went wrong!" }) {
    return (
      <div className="flex items-center justify-center h-[50vh] text-red-600 text-lg font-medium text-center">
        {message}
      </div>
    );
  }
  