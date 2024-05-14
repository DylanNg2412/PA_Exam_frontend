import React from "react";

function GamesTable(props) {
  const { games, isLoading, isError } = props;
  /* INSTRUCTION: Show "loading..." when isLoading is true */
  if (isLoading) {
    return <>loading...</>;
  }

  /* INSTRUCTION: Show "error" when isError is true */
  if (isError) {
    return <>An error has occur. Please try again</>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genres</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {/* INSTRUCTION: if games data is available, display the games in a table. if not, display a "No games found." message */}
        </tbody>
        <tbody>
          {games && games.length > 0 ? (
            games.map((g) => (
              <tr key={g.title}>
                <td>{g.title}</td>
                <td>{g.genres.join(", ")}</td>
                <td>{g.rating}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No games found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default GamesTable;
