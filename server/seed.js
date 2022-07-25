const { sequelize, secrets } = require('./config.js');

const seed = (req, res) => {
    const { password } = req.body;

    if (password == secrets.ADMIN_PASS) {
        console.log('Running seeds');

        sequelize.query(`
            drop table if exists artists;
            drop table if exists users;

            create table artists (
                artist_id serial primary key,
                name varchar(200) not null,
                spotify_id varchar(200) not null,
                picture_url varchar(200),
                external_url varchar(200)
            );

            create table users (
                user_id serial primary key,
                name varchar(200) not null,
                email varchar(200) not null,
                hashed_password varchar(200) not null,
                admin boolean default false
            );

            insert into artists (name, spotify_id)
            values ('Gilberto Gil', '7oEkUINVIj1Nr3Wnj8tzqr'),
                ('Maria Bethânia', '3f5VCwd57gZsqMad28jyLV'),
                ('Zeca Pagodinho', '3qZ2n5keOAat1SoF6bHwmb'),
                ('Rosabege', '4pIMR0ka7P0rAHRDkfrHFP'),
                ('Joca', '45SdbfTDVazlg3Ehph9UlT'),
                ('Maria Rita', '1C8UBSZs5rOPfxuxTMS6OI'),
                ('Gloria Groove', '7rXMvXRnWHaSwnVvPeUUfw'),
                ('Diogo Nogueira', '57xRtfFlssbpntpRQOBodd'),
                ('Pabllo Vittar', '6tzRZ39aZlNqlUzQlkuhDV'),
                ('Vanessa da Mata', '57pVvBwa3ZCR9LsVlkLXj7'),
                ('Cidade Negra', '4cx31cxKTg5L8blZE24qfZ'),
                ('Baco Exu do Blues', '78nr1pVnDR7qZH6QbVMYZf'),
                ('Djonga', '204IwDdaHE4ymGk9Kya2pY'),
                ('Black Alien', '6aCbXH85qN6xo54C7atSMx'),
                ('Seu Jorge', '0i1s9WcIu0PrUvHzALgofo'),
                ('Arlindo Cruz', '096an3uS6ZaK2XySae6SqP'),
                ('Ana Frango Elétrico', '7uvxsk688pwnBNA62cTKS1'),
                ('BaianaSystem', '5JHYuwE2n7bleXMUsmtCW5'),
                ('Mc Tha', '0fpg4Y7Q6ZRDSppLLt7G0n'),
                ('Luedji Luna', '0sWTkzCrdEvuX7Du6MFLzc'),
                ('Criolo', '37ZflmHTdxkSLQuT8w9NBs'),
                ('Alceu Valença', '559vxOLTzlAv0zB77JMcdG'),
                ('Gal Costa', '1b8kpp4DUwt1hWaxTiWQhD'),
                ('Céu', '2eFVsaX3yHLPeWpiqvmeFn'),
                ('Duda Beat', '2QLSJqqGIstNbO6nYRR16o'),
                ('Caetano Veloso', '7HGNYPmbDrMkylWqeFCOIQ'),
                ('Jorge Ben Jor', '5JYtpnUKxAzXfHEYpOeeit'),
                ('Djavan', '5rrmaoBXZ7Jcs4Qb77j0YA'),
                ('Mariene de Castro', '2MaqyTrc7HzuYvLnvfhxIN'),
                ('Mc Poze do Rodo', '28ie4NNTa2VW2QV4Zray8M');
        `)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('Error seeding DB:', err);
            res.sendStatus(400);
        });
    } else {
        res.sendStatus(401);
    };
};

module.exports = {
    seed
};