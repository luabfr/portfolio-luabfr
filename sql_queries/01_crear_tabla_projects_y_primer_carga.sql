-- CREATE TABLE projects (
--     id SERIAL PRIMARY KEY,
--     project_name VARCHAR(255),
--     project_subtitle VARCHAR(255),
--     description TEXT,
--     year INTEGER,
--     type_of_work VARCHAR(255),
--     industry VARCHAR(255),
--     tags TEXT[],
--     imgs TEXT[],
--     has_figma TEXT,
--     has_figma_prototype TEXT,
--     has_ux TEXT,
--     has_url TEXT,
--     has_play_store TEXT,
--     has_git TEXT,
--     has_pdf TEXT,
--     has_spotify TEXT,
--     has_vimeo TEXT,
--     has_youtube TEXT
-- );

select * from projects;


-- INSERT INTO projects (project_name, project_subtitle, description, year,type_of_work , industry, tags, imgs, has_url, has_git)
-- VALUES (
--     'MarketFinder',
--     'A MercadoLibre Frontend Challenge',
--     'Based on the MercadoLibre Test Challenge, MarketFinder is a personal project I developed to enhance my coding skills. \nThe user can search for a product, and the app connects to the MercadoLibre API to return a list of products that match the user''s request. Furthermore, the app includes filters and a dynamic detail view for the product selected by the user.',
--     '2023',
-- 	'Webapp',
--     'Code Challenge',	
--     '{"React", "Next.js", "Ant Design", "API Rest", "TypeScript"}',
--     '{"market-finder/market-finder-1.png", "market-finder/market-finder-2.png"}',
--     'projects/market-finder',
--     'https://github.com/luabfr/portfolio-luabfr/tree/master/src/app/projects/market-finder'
-- );


