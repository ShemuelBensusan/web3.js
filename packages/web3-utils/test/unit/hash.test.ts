import { ethers } from 'ethers';
import { sha3, sha3Raw, soliditySha3, soliditySha3Raw, encodePacked } from '../../src/hash';
import {
	sha3InvalidData,
	sha3ValidData,
	sha3EthersValidData,
	soliditySha3RawValidData,
	sha3RawValidData,
	sha3RawEthersValidData,
	soliditySha3ValidData,
	soliditySha3InvalidData,
	soliditySha3EthersValidData,
	encodePackData,
} from '../fixtures/hash';
/* eslint-disable @typescript-eslint/no-magic-numbers */
describe('hash', () => {
	describe('sha3', () => {
		describe('valid cases', () => {
			it.each(sha3ValidData)('%s', (input, output) => {
				expect(sha3(input)).toEqual(output);
			});
		});

		describe('invalid cases', () => {
			it.each(sha3InvalidData)('%s', (input, output) => {
				expect(() => sha3(input)).toThrow(output);
			});
		});

		describe('comparing with ether cases', () => {
			it.each(sha3EthersValidData)('%s', (input, output) => {
				// eslint-disable-next-line @typescript-eslint/no-magic-numbers
				expect(sha3(input)).toEqual(ethers.utils.keccak256(output));
			});
		});
	});

	describe('sha3Raw', () => {
		describe('valid cases', () => {
			it.each(sha3RawValidData)('%s', (input, output) => {
				expect(sha3Raw(input)).toEqual(output);
			});
		});
		describe('comparing with ether cases', () => {
			it.each(sha3RawEthersValidData)('%s', (input, output) => {
				// eslint-disable-next-line @typescript-eslint/no-magic-numbers
				expect(sha3Raw(input)).toEqual(ethers.utils.keccak256(output));
			});
		});
		describe('invalid cases', () => {
			it.each(sha3InvalidData)('%s', (input, output) => {
				expect(() => sha3Raw(input)).toThrow(output);
			});
		});
	});

	describe('soliditySha3', () => {
		describe('valid cases', () => {
			it.each(soliditySha3ValidData)('%s', (input, output) => {
				// eslint-disable-next-line @typescript-eslint/no-magic-numbers
				expect(soliditySha3(...input)).toEqual(output);
			});
		});
		describe('invalid cases', () => {
			it.each(soliditySha3InvalidData)('%s', (input, output) => {
				expect(() => soliditySha3(input)).toThrow(output);
			});
		});
		describe('ethers cases', () => {
			it.each(soliditySha3EthersValidData)('%s', (input, output) => {
				// eslint-disable-next-line @typescript-eslint/no-magic-numbers
				expect(soliditySha3(...input)).toEqual(
					ethers.utils.solidityKeccak256(output[0], output[1]),
				);
			});
		});
	});

	describe('soliditySha3Raw', () => {
		describe('valid cases', () => {
			it.each(soliditySha3RawValidData)('%s', (input, output) => {
				// eslint-disable-next-line @typescript-eslint/no-magic-numbers
				expect(soliditySha3Raw(...input)).toEqual(output);
			});
		});
		describe('invalid cases', () => {
			it.each(soliditySha3InvalidData)('%s', (input, output) => {
				expect(() => soliditySha3Raw(input)).toThrow(output);
			});
		});
		describe('ethers cases', () => {
			it.each(soliditySha3EthersValidData)('%s', (input, output) => {
				// eslint-disable-next-line @typescript-eslint/no-magic-numbers
				expect(soliditySha3Raw(...input)).toEqual(
					ethers.utils.solidityKeccak256(output[0], output[1]),
				);
			});
		});
	});

	describe('solidityPack', () => {
		describe('valid cases', () => {
			it.each(encodePackData)('%s', (input, output) => {
				// eslint-disable-next-line @typescript-eslint/no-magic-numbers
				expect(encodePacked(...input)).toEqual(output);
			});
		});
	});
});