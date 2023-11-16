export const Rating = ({ rating }) => {
    let ratingList = Array(5).fill(false);
    for (var i = 0; i < rating; i++) {
        ratingList[i] = true;
    }

    return (
        <div>
            {ratingList.map((value, index) =>
                value ? (
                    <i
                        key={index}
                        className="mr-1 text-lg font-bold tracking-wide dark:text-amber-200 text-amber-600/75 bi bi-star-fill"
                    ></i>
                ) : (
                    <i
                        key={index}
                        className="mr-1 text-lg font-bold tracking-wide text-amber-600/50 bi bi-star dark:text-amber-300/50"
                    ></i>
                ),
            )}
        </div>
    );
};
