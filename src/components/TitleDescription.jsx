import React from "react";

function TitleDescription({ title, values }) {
    if (["id", "image"].includes(title) || !values || values.length === 0) {
        return;
    }

    if (title === "budget") {
        let USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        values = USDollar.format(values);
    }

    if (typeof values !== "object") {
        try {
            new URL(values);
            return (
                <>
                    <div className="w-full flex flex-wrap gap-2">
                        <p className="capitalize w-fit font-bold border-b-2 text-neutral-500 border-yellow-400">
                            {title}:
                        </p>
                        <a className="text-blue-600 underline" href={values}>{values}</a>
                    </div>
                </>
            );
        } catch (error) {
            values = [{ name: values }];
        }
    }

    return (
        <>
            <div className="w-full flex flex-wrap gap-2">
                <div className={title === "genre" ? "w-full" : " w-fit"}>
                    <p className="capitalize font-bold border-b-2 text-neutral-500 border-yellow-400 w-fit">
                        {title}:
                    </p>
                </div>
                {values?.map((value, index) => (
                    <p className={title === 'genre' && 'border-2 px-4 py-2 rounded'} key={index}>
                        {value?.name ? value.name : value}
                    </p>
                ))}
            </div>
        </>
    );
}

export default TitleDescription;
