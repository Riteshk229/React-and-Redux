const WelcomeMesage = ({ onGetPostClick }) => {
  return (
    <div className="bg-light text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold">There are no posts.</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onGetPostClick}
        >
          Get Posts From Server
        </button>
      </div>
    </div>
  );
};

export default WelcomeMesage;
