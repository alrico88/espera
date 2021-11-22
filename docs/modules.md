[espera](README.md) / Exports

# espera

## Table of contents

### Enumerations

- [Unit](enums/Unit.md)

### Functions

- [convertToMilliseconds](modules.md#converttomilliseconds)
- [sleep](modules.md#sleep)

## Functions

### convertToMilliseconds

▸ **convertToMilliseconds**(`num`, `unit`): `number`

Converts to milliseconds another time unit

**`export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | The amount |
| `unit` | [`Unit`](enums/Unit.md) | The unit |

#### Returns

`number`

The amount in milliseconds

#### Defined in

[index.ts:17](https://github.com/alrico88/microbundle-boilerplate/blob/master/src/index.ts#L17)

___

### sleep

▸ **sleep**(`timeout`, `unit`): `Promise`<`void`\>

Stops execution for the desired time

**`export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeout` | `number` | Amount to wait |
| `unit` | [`Unit`](enums/Unit.md) | Unit of the amount |

#### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:40](https://github.com/alrico88/microbundle-boilerplate/blob/master/src/index.ts#L40)
