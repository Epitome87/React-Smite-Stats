import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directoryPath = path.join(__dirname, '../mockData');

const loadMockMatches = async () => {
  try {
    // TODO: Make this able to read this file from a different path
    const dataBuffer = fs.readFileSync(`${directoryPath}/games.json`);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    [];
  }
};

const getMatches = async (req, res) => {
  try {
    const matches = await loadMockMatches();
    console.log('Matches', matches);
    res.status(200).send({ matches });
  } catch (error) {
    res.status(500).send('Error fetching matches!');
  }
};

const getMatch = async (req, res) => {
  const { id } = req.params;

  try {
    const matches = await loadMockMatches();
    // TODO: Prevent errors. Also ID most likely won't be an index, but rather a key
    res.status(200).send(matches[id]);
  } catch (error) {}
};

export { getMatches, getMatch };
