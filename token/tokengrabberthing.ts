//@ts-ignore
declare const Il2Cpp: any;
declare const Java: any;

function gradient(text: string) {
    let result = "";

    const lines = text.split("\n");

    for (const line of lines) {
        const length = line.length;

        for (let i = 0; i < length; i++) {
            const t = i / Math.max(length - 1, 1);

            const r = Math.floor(180 - (110 * t));
            const g = Math.floor(60 - (50 * t));
            const b = Math.floor(255 - (60 * t));

            result += "\x1b[38;2;" + r + ";" + g + ";" + b + "m" + line[i];
        }

        result += "\n";
    }

    return result + "\x1b[0m";
}

Il2Cpp.perform(() => {
    const acImage = Il2Cpp.domain.assembly("AnimalCompany").image;
    const AnimalCompanyAPI = acImage.class("AnimalCompany.API.AnimalCompanyAPI");
    const apiSession = AnimalCompanyAPI.method("get_session").invoke();

    const bearer = apiSession.method("get_AuthToken").invoke();
    const refresh = apiSession.method("get_RefreshToken").invoke();

const banner = `
████████╗ ██████╗ ██╗  ██╗███████╗███╗   ██╗
╚══██╔══╝██╔═══██╗██║ ██╔╝██╔════╝████╗  ██║
   ██║   ██║   ██║█████╔╝ █████╗  ██╔██╗ ██║
   ██║   ██║   ██║██╔═██╗ ██╔══╝  ██║╚██╗██║
   ██║   ╚██████╔╝██║  ██╗███████╗██║ ╚████║
   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝
`;

    console.log(gradient(banner));

    console.log(
        gradient("Not all autistic people are autistic. - Qstar")
    );

    setTimeout(() => {
        console.log("");
        console.log(gradient("Bearer: " + bearer));
        console.log(gradient("Refresh: " + refresh));
    }, 6000);
});
