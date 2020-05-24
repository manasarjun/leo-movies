import React from 'react';

const DisplayWatchList = (props) => {
    const getWatchList = window.localStorage.getItem('watchlist');
    const watchList = JSON.parse(getWatchList);
    console.log('local.......', props, watchList);

    return (
        <>
            {watchList.map((m) => (
                <p>
                    {m.title} {m.overview}
                </p>
            ))}
        </>
    );
};
export default DisplayWatchList;
